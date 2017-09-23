define(['require', 'text!template/home/personGM/publishPostTpl.html', 'eleditor', 'webuploader'], function(require, publishPostTpl, artEditor) {
    return function() {
        window.WebUploader = require('webuploader')
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
            var content = Edr.getContent();
            if (theme.trim() && (content.trim() && $(content).text() != '点击此处编辑内容' || $('#content').find('img').length)) {
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
            }
        })


        // 初始化编辑器
        var Edr = new Eleditor({
            el: '#content', //容器
            //placeHolder: '请输入内容',
            upload: { //上传配置
                server: '../../../dev/src/assets/eleditor/upload.json', //上传路径
                compress: true, //上传前是否压缩图片
                fileSizeLimit: 20 //限制图片上传大小，单位M
            },
        });
    }
})