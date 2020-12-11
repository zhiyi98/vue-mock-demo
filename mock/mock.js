import Mock from 'mockjs'

let getData = function () {
  let articles = []
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      id: i + 1,
      msg: '这是get请求',
      title: Mock.mock('@ctitle'),
      word: Mock.mock('@cword(5,10)'),
      paraprath: Mock.mock('@cparagraph'),
      name: Mock.mock('@cname'),
      url: Mock.mock('@url'),
      email: Mock.mock('@email'),
      ip: Mock.mock('@ip'),
      city: Mock.mock('@city(true)'),
      image: Mock.Random.dataImage('200x300', Mock.mock('@cname')),
    }
    articles.push(newArticleObject)
  }
  return articles
}

let postData = function () {
  let articles = []
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      msg: '这是post请求',
      string: {
        string_A: Mock.mock({ '@string|1-10': '★' }),
        string_A: Mock.mock({ '@string|3': '★★★' }),
      },
      number: {
        number_A: Mock.mock({ 'number|+1': 200 }),
        number_B: Mock.mock({ 'number|1-100': 100 }),
      },
      boolean: Mock.mock('@boolean'),
      object: {
        object_A: Mock.mock({
          "city|2": {
            "320000": "北京市",
            "310000": "上海市",
            "330000": "广州省",
            "340000": "深圳市"
          }
        }),
        object_B: Mock.mock({
          "object|2-4": {
            "110000": "北京市",
            "120000": "天津市",
            "130000": "河北省",
            "140000": "山西省"
          }
        })
      },
      array: Mock.mock({
        "array|1-10": [
          {
            "name|+1": [
              "Hello",
              "Mock.js",
              "!"
            ]
          }
        ]
      }),
      function: Mock.mock({
        'foo': 'Syntax Demo',
        'name': function () {
          return this.foo
        }
      }),
      RegExp: Mock.mock({ 'regexp|3': /\d{5,10}\-/ }),
      path: Mock.mock({
        "a": '/',
        "foo": "Hello",
        "nested": {
          "a": {
            "b": {
              "c": "Mock.js"
            }
          }
        },
        "absolutePath": "@/foo" + "@a" + "@/nested/a/b/c"
      }),
      basic: {
        boolean: Mock.mock('@boolean(1, 9, true)'),
        natural: Mock.mock('@natural(60, 100)'),
        integer: Mock.mock('@integer(1000, 9999)'),
        float: Mock.mock('@float(60, 100, 3, 5)'),
        character: Mock.mock('@character("√×")'),
        range: Mock.mock('@range(1,10,5)')
      },
      date: Mock.mock('@date') + ' ' + Mock.mock('@time'),
      images: {
        images_A: Mock.Random.image('200x100'),
        images_A: Mock.Random.dataImage('200x100'),
      },
      color: Mock.mock('@color'),
      text: {
        paragraph: Mock.mock('@cparagraph'),
        sentence: Mock.mock('@csentence'),
        word: Mock.mock('@cword'),
        title: Mock.mock('@ctitle'),
      },
      name: {
        first: Mock.mock('@cfirst'),
        last: Mock.mock('@clast'),
        name: Mock.mock('@cname'),
      },
      web: {
        url: Mock.mock('@url'),
        domain: Mock.mock('@domain'),
        protocol: Mock.mock('@protocol'),
        tld: Mock.mock('@tld'),
        email: Mock.mock('@email'),
        ip: Mock.mock('@ip'),
      },
      address: {
        region: Mock.mock('@region'),
        province: Mock.mock('@province'),
        city: Mock.mock('@city'),
        county: Mock.mock('@county'),
        zip: Mock.mock('@zip'),
      },
      helper: {
        capitalize: Mock.mock('@capitalize("hello")'),
        upper: Mock.mock('@upper("hello")'),
        lower: Mock.mock('@lower("hello")'),
        pick: Mock.mock('@pick(["a", "e", "i", "o", "u"])'),
        shuffle: Mock.mock('@shuffle(["a", "e", "i", "o", "u"])'),
      },
      miscellaneous: {
        guld: Mock.mock('@guld'),
        id: Mock.mock('@id'),
        increment: Mock.mock('@increment'),
      },
    }
    articles.push(newArticleObject)
  }
  return articles
}

Mock.mock('/get', getData)
Mock.mock('/post', postData)