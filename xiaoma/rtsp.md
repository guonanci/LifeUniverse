# rtsp ffmpeg 怎么穿透到公网

要将 RTSP 流穿透到公网，可以使用 FFmpeg 作为流媒体服务器，并通过 NAT 转发或反向代理等技术将流暴露到公网。以下是实现这一目标的详细步骤：

### 步骤 1：确保你的服务器可以访问互联网

确保你的服务器有一个公共 IP 地址或通过路由器进行端口转发。这允许外部设备访问你的服务器。

### 步骤 2：设置 NAT 端口转发

如果你的服务器位于 NAT 网络（例如，在家用路由器后面），需要在路由器上设置端口转发，将外部的 RTSP 请求转发到内部服务器的 RTSP 端口（通常是 554）。

1. 登录到你的路由器管理界面。
2. 找到端口转发（Port Forwarding）设置。
3. 添加一个新的转发规则，将外部端口（例如 554）转发到内部服务器的相同端口。

### 步骤 3：使用 FFmpeg 推送 RTSP 流到公网服务器

你可以使用 FFmpeg 将本地视频文件或实时流推送到公网服务器。假设你要推送一个本地视频文件到公网 RTSP 服务器：

```bash
ffmpeg -re -i input.mp4 -c:v libx264 -f rtsp rtsp://<your-public-ip>:<port>/stream
```

### 步骤 4：使用 `nginx-rtmp-module` 或其他流媒体服务器

配置一个流媒体服务器（例如，Nginx + RTMP 模块）将 RTSP 流公开到公网。

#### 安装 Nginx 和 RTMP 模块

首先安装 Nginx 和 RTMP 模块。以 Ubuntu 为例：

```bash
sudo apt-get update
sudo apt-get install -y libnginx-mod-rtmp
```

#### 配置 Nginx RTMP 模块

编辑 Nginx 配置文件，通常位于 `/etc/nginx/nginx.conf`。

添加以下内容：

```nginx
rtmp {
    server {
        listen 1935; # RTMP 端口

        application live {
            live on;
            record off;

            # 将 RTMP 流转发为 RTSP
            exec ffmpeg -i rtmp://localhost/live/$name -vcodec copy -acodec copy -f rtsp rtsp://localhost:554/$name;
        }
    }
}
```

重新启动 Nginx 服务：

```bash
sudo systemctl restart nginx
```

#### 推送流到 Nginx RTMP 服务器

使用 FFmpeg 推送 RTMP 流到 Nginx RTMP 服务器：

```bash
ffmpeg -re -i input.mp4 -c:v libx264 -f flv rtmp://<your-public-ip>/live/stream
```

### 步骤 5：使用反向代理（可选）

如果你的服务器在防火墙后面且不能直接进行端口转发，可以使用反向代理将 RTSP 流暴露到公网。例如，使用 Nginx 反向代理：

#### 配置 Nginx 反向代理

在 Nginx 配置文件中，添加以下内容：

```nginx
http {
    server {
        listen 80;
        server_name <your-public-domain>;

        location / {
            proxy_pass http://localhost:554;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

重新启动 Nginx 服务：

```bash
sudo systemctl restart nginx
```

### 步骤 6：测试 RTSP 流

使用 VLC 或其他 RTSP 播放器测试你的流：

```text
rtsp://<your-public-ip>/stream
```

或者使用你配置的域名：

```text
rtsp://<your-public-domain>/stream
```

通过这些步骤，你应该能够将 RTSP 流穿透到公网，并允许外部设备访问你的流。确保在推流和转发过程中配置防火墙规则，以允许必要的流量通过。
