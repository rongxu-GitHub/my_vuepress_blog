---
title: vuepress项目启动报错
---

# vuepress项目启动报错

在使用vuepress时，使用`yarn dev`命令启动本地项目服务时，突然就报错：

```Bash
failed with exit code 127
```

原因可能是vuepress文件损坏，只需要重新全局安装vuepress或者vue：

```Bash
sudo npm install -g vue
 
sudo npm install -g vuepress
```

如果还不行就删除node-modules文件，重新安装`npm install`