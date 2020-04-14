define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\Administrator\\Desktop\\learnProjects\\learnNode\\06-基本登录和注册\\doc\\main.js",
    "groupTitle": "C:\\Users\\Administrator\\Desktop\\learnProjects\\learnNode\\06-基本登录和注册\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/article/addArticle",
    "title": "添加文章接口",
    "name": "addArticle",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>文章分类.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>文章标签.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/delArticle",
    "title": "删除文章接口",
    "name": "delArticle",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章唯一id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/selectArticleById",
    "title": "精准查询文章接口",
    "name": "selectArticleById",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章唯一id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/selectArticleByPage",
    "title": "分页查询文章接口",
    "name": "selectArticleByPage",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每一页的数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前第几页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/selectArticleBykeyword",
    "title": "模糊查询文章接口",
    "name": "selectArticleBykeyword",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>查询关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/updateArticle",
    "title": "修改文章接口",
    "name": "updateArticle",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章唯一id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>文章分类.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>文章标签.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/articleRouter.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/user/getMailCode",
    "title": "用户获取邮箱验证码接口",
    "name": "getMailCode",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>用户邮箱.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录接口",
    "name": "login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>唯一的用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "用户注册接口",
    "name": "register",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>唯一的用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>关联邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "user"
  }
] });
