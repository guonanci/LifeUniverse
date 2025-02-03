#!/bin/bash
echo '''
#######################################################
# $Name             : buildPro.sh	　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
# $Version          : v3.0 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
# $Function         : release/on-line for jboss Script
# $Author           : Mad Dragon
# $Create Date      : 2019-1-5 16:09:42
# $email            : 395548460@qq.com
# $Description      : 通用项目部署 shellscript 脚本
#######################################################
'''

set -e

# start: config...
echo "==================start: 项目信息========================="
# 需要远程上传的服务器
# serviceNameLst="root@192.168.2.150 root@172.30.34.210"
serviceNameLst=$1
echo "serviceNameLst $serviceNameLst"
# workSpacePath 工作区间地址
workSpacePath="${WORKSPACE}"
# workSpaceName 项目名
# 一般为项目名: 驼峰写法 customer-center-app ==》customerCenterApp
workSpaceName="${JOB_BASE_NAME}"
deployProHome="home"
deployProConfig="proconfig"
deployProCommon="common"
deployProPath="/$deployProHome/$deployProConfig/$deployProCommon"
deployProName="deployPro.sh"
# 项目文件压缩包名 默认 dist.tar.gz
resourceName="dist.tar.gz"
# 项目部署地址
projectPath="/home/project/${workSpaceName}"
# 临时文件存放地址 从远程拉取的项目文件存放的地方
transferPath="/home/project/transfer/${workSpaceName}"
# 备份 项目文件压缩包名
filename="${JOB_NAME}_${BUILD_ID}.tar.gz"
# 备份 项目文件存放地址
backPath="/home/back/${JOB_BASE_NAME}"
# end: config...

nodeV=$(node -v)
npmV=$(npm -v)

echo """
#######################################################
变量配置：

#   serviceNameLst  : $serviceNameLst
#   workSpacePath   : $workSpacePath
#   workSpaceName   : $workSpaceName
#   deployProHome   : $deployProHome
#   deployProConfig : $deployProConfig
#   deployProCommon : $deployProCommon
#   deployProPath   : $deployProPath
#   deployProName   : $deployProName
#   resourceName    : $resourceName
#   projectPath     : $projectPath
#   transferPath    : $transferPath
#   filename        : $filename
#   backPath        : $backPath

系统环境：

#   node 版本       : $nodeV
#   npm 版本        : $npmV
#######################################################
"""

# start: function...........
printf "\n\n"
printf "\n\n"
echo "==================start: 项目编译========================="
printf "\n\n"
echo "001、更新依赖 install         ====》"
npm install

printf "\n\n"
echo "002、编译 build               ====》"
npm run build

printf "\n\n"
echo "003、压缩文件 $resourceName   ====》"
cd dist
tar -zcf $resourceName *

printf "\n\n"
mkdir -p $projectPath
echo "004、创建 $projectPath        ====》"

printf "\n\n"
rm -rf $projectPath/$resourceName
mv $resourceName $projectPath/
echo "005、移动文件 $projectPath/$resourceName         ====》"

printf "\n\n"
echo "006、目录结构                 ====》"
ls $projectPath

printf "\n\n"
echo "==================start: 远程上传文件========================="
echo "007、start:远程上传文件...                        ====》"
printf "\n\n"
for serviceName in $serviceNameLst
do
    echo "serviceName: $serviceName "
ssh -t $serviceName<<EOF
echo "=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*==*=*=*=*=*==*=*=*=*=*=*==*=*=*=*=*=*==*=*="
printf "\n\n"
echo "[debug]：查看ip ====>"
ip add

printf "\n\n"
mkdir -p $transferPath
echo "      [debug]:创建 transferPath：$transferPath"

mkdir -p $deployProPath
echo "      [debug]:创建 deployProPath：$deployProPath"

mkdir -p $projectPath
echo "      [debug]:创建 projectPath：$projectPath"

mkdir -p $backPath
echo "      [debug]:创建 backPath：$backPath"
printf "\n\n"
EOF

    scp -r "$projectPath/$resourceName" "$serviceName:$transferPath"
    echo "          [debug]:上传 $projectPath/$resourceName 到 $serviceName:$transferPath  成功！"
    printf "\n\n"

done

printf "\n\n"
echo "end:远程上传文件..."

printf "\n\n"
echo "撒花结束 *★,°*:.☆(￣▽￣)/$:*.°★* 。"

printf "\n\n"
echo "==================start:项目部署========================="

for serviceName in $serviceNameLst
do
    ssh -t $serviceName<<EOF
echo "=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*==*=*=*=*=*==*=*=*=*=*=*==*=*=*=*=*=*==*=*="
printf "\n\n"
echo "[debug]：查看ip ====>"
ip add

printf "\n\n"
rm -rf $projectPath/*
echo "      [debug]:删除 $projectPath/* 旧文件 成功"

printf "\n\n"
ls $projectPath

printf "\n\n"
mv "$transferPath/$resourceName" "$projectPath/"
echo "      [debug]:移动 压缩包文件 $transferPath/$resourceName 到 $projectPath 成功"

printf "\n\n"
cd $projectPath/
pwd

printf "\n\n"

tar -zxf $resourceName
echo "      [debug]:将 $projectPath/$resourceName 解压 $projectPath 成功"

printf "\n\n"

mv "$projectPath/$resourceName" $backPath/$filename
echo "      [debug]:将文件 $projectPath/$resourceName 备份到 $backPath/$filename 成功"
printf "\n\n"
EOF

done

# ----------------------------------------------
