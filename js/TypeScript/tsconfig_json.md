22. TypeScript 的 tsconfig.json 中有哪些配置项信息？

{
  "files": [],
  "include": [],
  "exclude": [],
  "compileOnSave": false,
  "extends": "",
  "compilerOptions": { ... }
}

files 是一个数组列表，里面包含指定文件的相对或绝对路径，用来指定待编译文件，编译器在编译时只会编译包含在files中列出的文件。

include & exclude 指定编译某些文件，或者指定排除某些文件。

compileOnSave：true 让IDE在保存文件时根据tsconfig.json重新生成文件。

extends 可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置。

compilerOptions 编译配置项，如何对具体的ts文件进行编译

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


23. TypeScript 中如何设置模块导入的路径别名？

通过 tsconfig.json 中的compilerOptions.paths 项来配置:
{
  "compilerOptions":
    {
      "baseUrl": ".",
      "paths": {
         "@helper/*": ["src/helper/*"],
         "@utils/*": ["src/utils/*"],
         ...
      }
   }
}

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
