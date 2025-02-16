export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx67c06d4720f87fe2",
    // 公众号appSecret
    appSecret: "cb5173651b888978f4dee7dd2acd4cc2",
    // 模板消息id
    templateId: "Mj64YEoVxOkaHzjS91V4tKjz205bet5hTInR7qlIWGw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oCe-Z5kTUv0-YuXcqjmd3GE26AFM", "oCe-Z5skxqbBtS5D5IL2qmngio2c", "oCe-Z5pXa-PS3NzS2NL3ZBnMM8BI", "oCe-Z5iBR97x1cqEioJxDMIRpssM"],
     
    // 信息配置
    // 所在省份
    province: "山西",
    // 所在城市
    city: "朔州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝儿", "year": "1996", "date": "07-12", " r": 'new'},
      {"name": "宝宝", "year": "1993", "date": "03-15", " r": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-11-15",
    // 相识纪念日
    marryDate: "2018-06-13"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们相识的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
