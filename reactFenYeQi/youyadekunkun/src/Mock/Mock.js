import Mock from 'mockjs'
let data=[
    {"id":0,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":1,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":2,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":3,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":4,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":5,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":6,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":7,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":8,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":9,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":10,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":11,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":12,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":13,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":14,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":15,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":16,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":17,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":18,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":19,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":20,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":21,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":22,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":23,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":24,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
    {"id":25,"title":"我拿着一朵哀花 我不知该往哪插","star":989},
]
Mock.mock('/list','post',function(options){
    let {page,pageSize}=JSON.parse(options.body);
    var list=data.slice((page-1)*pageSize,page*pageSize);
    return {
        "status":200,
        "page":page,
        "pageSize":pageSize,
        "list":list
    }
})