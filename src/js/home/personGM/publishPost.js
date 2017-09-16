define(['text!template/home/personGM/publishPostTpl.html', 'artEditor'], function(publishPostTpl, artEditor) {
    return function() {
        $('#publishPost').remove();
        var $publishPostTpl = $(publishPostTpl);
        $('.main-content').append($publishPostTpl)

        // 页面进入动画
        $publishPostTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $publishPostTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $publishPostTpl.remove()
            })
        })

        // 注册保存按钮事件
        .on('tap', '.answer', function() {
            var theme = $('.post-theme input').val()
            console.log($('#content').getValue())
            $publishPostTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $('.forum-list').append('<div class="list-row">' +
                    '<div class="theme">' + theme + '</div>' +
                    '<div class="author">李萌</div>' +
                    '<div class="click">18</div>' +
                    '<div class="answer">43</div>' +
                    '<div class="last-answer">2017/09/09</div>' +
                    '</div>')
                $publishPostTpl.remove()
            })
        })

        // 注册图片上传按钮事件
        .on('tap', '.picBtn', function() {
            $('#imageUpload').click()
        })


        $('#content').artEditor({
            imgTar: '#imageUpload',
            limitSize: 5, // 兆
            showServer: false,
            uploadUrl: '',
            data: {},
            uploadField: 'image',
            placeholader: '<p>请输入文章正文内容</p>',
            validHtml: ["br"],
            uploadSuccess: function(res) {
                // 这里是处理返回数据业务逻辑的地方
                // `res`为服务器返回`status==200`的`response`
                // 如果这里`return <path>`将会以`<img src='path'>`的形式插入到页面
                // 如果发现`res`不符合业务逻辑
                // 比如后台告诉你这张图片不对劲
                // 麻烦返回 `false`
                // 当然如果`showServer==false`
                // 无所谓咯
                return res.path;
            },
            uploadError: function(res) {
                //这里做上传失败的操作
                //也就是http返回码非200的时候
                console.log(res);
            }
        });
    }
})