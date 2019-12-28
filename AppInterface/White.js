"ui";
importClass(android.animation.ObjectAnimator)
/*
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WW         ___ __     ____      ___    ___   _   _          WW
WW        |   V  \   / _  )    / __|  / __| | | | |         WW
WW        | /\ /\ | ( (/ /_   | /    | /    \ \_| |         WW
WW        |_||_||_|  \_____|  |_|    |_|     \__  |         WW
WW                                              | |         WW
WW                          _.-"""-.          _/ /          WW
WW                        _/_______ `.       |__/           WW
WW                       / _______ \  \                     WW
WW                       \/,-. ,-.\/   \                    WW
WW                       ()>=   =<()`._ \_                  WW
WW                     ,-(.--(_)--.)`-.`(_)                 WW
WW                   ,'  /.-'\_/`-.\   `.                   WW
WW                  /   /    `-'    \    \                  WW
WW                ,'    \           /     `.                WW
WW               /     _ `.       ,'  _     \               WW
WW              /     _/   `-._.-'    \_     \              WW
WW             /_______|     -|O      |_______\             WW
WW            {________}______|_______{________}            WW
WW            ,'   _ \(_____[|_=]______)  / _   `.          WW
WW           /    / `'--------------------`' \    \         WW
WW           `---'  |_____________________|   `---'         WW
WW                    |_____|_____|_____|                   WW
WW                    |__|_____|_____|__|                   WW
WW        _           |_____|_____|_____|                   WW
WW       | |           _                                    WW
WW       | |          (_)        _                          WW
WW  ___  | |__    ___  _   ___  | |_  ___  _    ____   ___  WW
WW /  _| |  _ \  / __|| | / __| |  _||   V  \  / _  | / __| WW
WW(  (_  | | \ || /   | | \__ \ | |  | /\ /\ |( (_| | \__ \ WW
WW \___| |_| |_||_|   |_| |___/ |_|  |_||_||_| \____| |___/ WW
WW                         圣诞快乐：D                        WW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
*/
ui.statusBarColor("#BDBDBD"); //通知栏颜色


var Quin = 32552732;
//Not pink色是#DFC8C6
ui.layout(
    <frame background="#FAFAFA">//全局背景颜色
        <vertical align="center" paddingTop="5" margin="0">
            //<img src="https://raw.githubusercontent.com/Orange-shirt/OrangeJs/master/OrangeJs-Logo.png" w="auto" h="0"/>
            <img src="https://raw.githubusercontent.com/Orange-shirt/OrangeJs/master/OrangeJs_logo.png" w="auto" h="40"/>
              <img src="https://s2.ax1x.com/2019/12/25/lPXFoT.jpg" w="auto" marginTop="10" h="70"/>
            <text id="text" margin="15 10 0 5" textStyle="bold" color="#000000" bg="#FAFAFA" gravity="left" size="20" marginTop="10" h="auto">
            </text>
            <card  h="50" margin="0 0 0 0" cardCornerRadius="2dp"
            cardElevation="0dp" gravity="center_vertical">
            <horizontal gravity="center_vertical">
                <vertical padding="0 0" h="auto">
                </vertical>
            </horizontal>
            <View bg="#ffFAFAFA" h="*" w="*"/>//打底卡片颜色1
            <View bg="#FF4395FB" h="*" w="0"/>//打底卡片颜色2
            
            <card w="175" h="50" margin="181 0 5 0" cardCornerRadius="25dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="10 0" h="auto">
            </vertical>
            <View bg="#FFEA3324" h="*" w="*"/>//卡片颜色1
            <View bg="#FF4395FB" h="*" w="0"/>//卡片颜色2
            
            <card w="165" h="40" margin="5 5 0 0" cardCornerRadius="20dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="10 0" h="auto">
            </vertical>
            <View bg="#FFFAFAFA" h="*" w="*"/>//无障碍权限中的卡片颜色1
            <Switch id="autoService" text="无障碍服务" textColor="#000000" gravity="center" textStyle="bold" color="#FFFFFF" bg="#50FFFFFF" checked="{{auto.service != null}}" padding="5 5 5 5" textSize="15sp"/>
            </card>
        </card>
        <card w="175" h="50" margin="5 0 181 0" cardCornerRadius="25dp"
        cardElevation="0dp" gravity="center_vertical">
        <vertical padding="10 0" h="auto">
        </vertical>
        <View id="TEST" bg="#FF007CF3" h="*" w="*"/>//卡片颜色1
        <View bg="#FF4395FB" h="*" w="0"/>//卡片颜色2
        <card w="165" h="40" margin="5 5 0 0" cardCornerRadius="20dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="10 0" h="auto">
            </vertical>
            <View bg="#FFFAFAFA" h="*" w="*"/>//悬浮窗权限中的卡片颜色
        <text id="xfc_text" textStyle="bold" color="#000000"  gravity="center" size="15" h="auto">
        </text>
        </card>
    </card>
    </card>
    <card h="1" margin="5 5" cardCornerRadius="2dp"
    cardElevation="0dp" gravity="center_vertical">
    <vertical padding="10 0" h="auto">
        <text text="" textColor="#222222" textSize="0sp"/>
        <text text="" textColor="#999999" textSize="0sp"/>
    </vertical>
    <View bg="#FF832FFD" h="*" w="*"/>//分割线颜色1
    <View bg="#FF4395FB" h="*" w="308"/>//分割线颜色2
    <View bg="#FF32F558" h="*" w="246"/>//分割线颜色3
    <View bg="#FFFCD830" h="*" w="185"/>//分割线颜色4
    <View bg="#FFFE8E2D" h="*" w="123"/>//分割线颜色5
    <View bg="#FFFC3032" h="*" w="62"/>//分割线颜色6
    </card>
    <text id="NowScript" text="  可运行脚本" textStyle="bold" color="#000000" gravity="left" size="15" margin="18 8 0 0" h="auto">
    </text>
    <card h="100" margin="5 8" cardCornerRadius="2dp"
    cardElevation="0dp" gravity="center_vertical">
    <vertical padding="0 0" h="auto">
    </vertical>
    <View bg="#FF2BB75E" h="*" w="*"/>//打底卡片颜色1
    <text id="ScriptOne" text="自动看团课" textStyle="bold" color="#FFFFFF" gravity="center" size="20" marginTop="0" h="auto">
    </text>
    <text id="ScriptOne_tip"  textStyle="bold" color="#FFFFFF" bg="#81C784" gravity="center" size="10" marginTop="100" h="35">
    </text>
    </card>
    <text id="Privacy_Security" text="隐私与安全" color="#BDBDBD" margin="0 200 0 0" gravity="center" textSize="12sp">
    </text>
    </vertical>
    </frame>
);

var s = random(0, 1);
ui.ScriptOne_tip.text("脚本分辨率支持：1920*1080");
if (s == 0) {
    ui.text.text("  圣诞快乐");
} else {
    ui.text.text("  权限设置");
}

ui.xfc_text.text("急停悬浮按钮：关");

ui.Privacy_Security.click(()=>{
    
    });

ui.xfc_text.click(() => {
    if (ui.xfc_text.text() == "急停悬浮按钮：关") {
        ui.xfc_text.text("急停悬浮按钮：开");

    } else {
        ui.xfc_text.text("急停悬浮按钮：关");
    }
});

ui.ScriptOne.on('click', () => { 
    animator = ObjectAnimator.ofFloat(ui.ScriptOne_tip, "translationY", 0, -200, -200, -200);  
    animator.setDuration(3000); //动画时间      
    animator.start();
});

ui.text.click(() => ui.text.text("。"));

ui.text.longClick(() => {
    ui.text.setText("\n" + ui.text.getText())
    return true;
});
ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

//ui.text.longClick(() => {//当文字长按后执行的代码
//ui.text.setText(ui.text.getText())
//return true;
//});
//ui.oops.click(() => toast("我被点啦😄"));
//ui.oops.longClick(() => {
//var thisjoke = "This is a joke : )";
//if (ui.oops.text() != thisjoke) {
//    ui.oops.text(thisjoke);
//} else {
//    ui.oops.text("橘衫の脚本");
// }
// return true;
//});*/
//ui.text.click(() => ui.text.append("。")); //后面加个“。”