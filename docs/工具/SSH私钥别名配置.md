---
title: SSH私钥别名配置
---
# 一、 生成私钥文件


# 二、MAC配置


# 三、Windows配置

 在~\\.ssh目录下创建config文件,文件内容如下
```
Host github.com
  HostName github.com
  User iqijun  # github用户名
  port 22
  IdentityFile C:\Users\cruise\.ssh\id_ed25519_github
  PreferredAuthentications publickey
```

修改完成后，需要重启命令行终端，否则配置不生效

