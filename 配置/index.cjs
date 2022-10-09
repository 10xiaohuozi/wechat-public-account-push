/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxabf6c2a9a393aec1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a6d43e3daf79678fea8cb6498de4d33e',

  PROVINCE: '广东',
  CITY: '湛江',

  USERS: [
    {
      // 想要发送的人的名字
      name: '江小猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofS3555z1G1og8PO_lG0Nq23xy-Q',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'X5l4I9d7paUNe5M5lRx14-v3rO8ICKCwzRt7YaGSywk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '江小猪', year: '2001', date: '11-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '江小猪', year: '2002', date: '01-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'X5l4I9d7paUNe5M5lRx14-v3rO8ICKCwzRt7YaGSywk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofS3555z1G1og8PO_lG0Nq23xy-Q',
    }
  ],

}

module.exports = USER_CONFIG

