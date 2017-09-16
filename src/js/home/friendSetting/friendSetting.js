define(['text!template/home/friendSetting/friendSettingTpl.html', '../../comment/chooseUser2', 'mui'], function(friendSettingTpl, chooseUser2, mui) {
    return function() {
        $('#friendSetting').remove();
        $('.addGroup-pop').remove();
        var $friendSetting = $(friendSettingTpl);
        $('.main-content').append($friendSetting);

        $(function() {
            var _this = '';
            var $groupPop = $('.addGroup-pop')

            // 注册分组弹窗取消按钮事件
            .on('tap', '.group-cancel', function() {
                $groupPop.css({ 'display': 'none' })
                mask.close();
            })

            // 注册分组弹窗确认按钮事件
            .on('tap', '.group-confirm', function() {
                if (_this != 'add') {
                    _this.siblings().find('p').html($('.input-group-name').val())
                } else {
                    $('.friend-group').append(
                        '<div class="friend-list">' +
                        ' <div class="friend-item">' +
                        '<span class="modify-group mui-icon mui-icon-compose"></span>' +
                        '<div class="input-wrapper">' +
                        '<p class="mui-icon mui-icon-contact">' + $('.input-group-name').val() + '</p>' +
                        '</div>' +
                        '<div class="add-friend"><span></span>添加好友</div>' +
                        '</div>' +
                        '<div class="friends"><input type="text" name="" value="" readonly></div></div>'
                    )
                }
                $groupPop.css({ 'display': 'none' })
                mask.close();
            });
            // 创建蒙版
            var mask = mui.createMask(function() {
                $groupPop.css({ 'display': 'none' })
            })

            $('#friendSetting').stop().animate({ "left": 0 })

            // 注册关闭按钮事件
            .on('tap', '.close', function() {
                $friendSetting.stop().animate({ "left": '100%' })
            })

            // 注册添加分组事件
            .on('tap', '.addGroupBtn', function() {
                _this = 'add';
                $('.pop-title').html('添加分组')
                $('.pop-input input').val("")
                $groupPop.css({ 'display': 'block' })
                mask.show();
            })

            //注册修改分组按钮
            .on('tap', '.modify-group', function() {
                _this = $(this)
                $('.pop-title').html('修改分组')
                $('.pop-input input').val($(this).siblings().find('p').html())
                $groupPop.css({ 'display': 'block' })
                mask.show();
            })

            // 注册添加好友按钮
            .on('tap', '.add-friend', function() {
                var $this = $(this).parent().siblings();
                chooseUser2($this)
            })
        })
    }
})