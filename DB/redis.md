Redis的特点
1）Redis也是一种数据库，Redis中的数据是放到内存中的，Redis查询速度极快。一些常用的数据，可以存到Redis中，缩短从数据库查询数据的时间
2）Redis可以设置过期时间，可以将一些需要定期过期的信息放到Redis中，有点类似cookie
运用场景
1）将经常查询的信息存储到redis中，如抽奖活动的配置信息，这些信息查询的频率最高，放到Redis中可以提高查询速度，还可以存储用户的个人信息（权限、基础信息等）
2）需要设置过期时长的信息，比如微信授权，每2小时去过期一次，将对应的授权code存进去，到时删除


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

Redis的优缺点:https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fwgw_dream%2Farticle%2Fdetails%2F83780503

