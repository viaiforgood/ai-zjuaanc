function createAIEventForm() {
  // Create a new Google Form
  var form = FormApp.create('北卡浙大校友會 AI 智能體專題講座報名表 ｜ ZJUAANC AI Agent Seminar RSVP');
  
  // Set the description
  form.setDescription(
    '歡迎參加由北卡浙江大學校友會 (ZJUAANC) 主辦的 AI 智能體與 OpenClaw 專題線上講座。\n' +
    '本講座將由校友 Michael Huo 主講，介紹 AI Agent 核心設計哲學，並現場演示 24/7 本地個人 AI 助理的實戰與架構。\n\n' +
    '時間：2026年5月30日（週六） 美東 4:00-5:00 PM / 美西 1:00-2:00 PM (1-Hour Zoom)\n' +
    '我們將在講座開始前通過郵件和微信群發送 Zoom 會議鏈接。'
  );
  
  // Configure settings
  form.setCollectEmail(true); // Collect email addresses (responder input)
  form.setAllowResponseEdits(true); // Allow respondents to edit their responses after submitting
  form.setLimitOneResponsePerUser(false); // Allow multiple responses (set to true if you want to require sign-in)
  
  // Question 1: Name / 姓名
  var nameItem = form.addTextItem();
  nameItem.setTitle('姓名 ｜ Name')
          .setRequired(true);
          
  // Question 2: WeChat ID / 微信 ID
  var wechatItem = form.addTextItem();
  wechatItem.setTitle('微信 ID ｜ WeChat ID')
            .setHelpText('用於邀請您加入講座專屬微信交流群 / For inviting you to the seminar WeChat group.')
            .setRequired(true);
            
  // Question 3: Relationship with ZJU
  var zjuItem = form.addMultipleChoiceItem();
  zjuItem.setTitle('與浙江大學的關係 ｜ Relationship with ZJU')
         .setChoices([
           zjuItem.createChoice('北卡浙大校友 / ZJU Alumnus in North Carolina'),
           zjuItem.createChoice('北美其他地區浙大校友 / ZJU Alumnus in other North American regions'),
           zjuItem.createChoice('其他地區浙大校友 / ZJU Alumnus in other regions'),
           zjuItem.createChoice('非校友，但對 AI 技術感興趣的朋友 / Friend / AI Enthusiast')
         ])
         .setRequired(true);
         
  // Question 4: Topics/Questions of Interest
  var topicsItem = form.addParagraphTextItem();
  topicsItem.setTitle('您對本次講座最感興趣的內容或有何提問？ ｜ Topics of interest or questions?')
            .setRequired(false);
            
  // Question 5: Prior coding/AI experience
  var expItem = form.addMultipleChoiceItem();
  expItem.setTitle('是否有編程或 AI 開發經驗？ ｜ Prior coding or AI experience?')
         .setChoices([
           expItem.createChoice('無相關背景 / No prior background'),
           expItem.createChoice('有一些了解，非專業開發者 / General understanding, non-professional'),
           expItem.createChoice('專業開發者或從事 AI 相關工作 / Professional developer or AI practitioner')
         ])
         .setRequired(false);
         
  // Log the URLs
  Logger.log('====================================================');
  Logger.log('🎉 Form Created successfully!');
  Logger.log('----------------------------------------------------');
  Logger.log('👉 Live Form URL (Share this with users / put on site):');
  Logger.log(form.getPublishedUrl());
  Logger.log('----------------------------------------------------');
  Logger.log('👉 Editor URL (To edit form settings or see responses):');
  Logger.log(form.getEditUrl());
  Logger.log('====================================================');
  
  return form.getPublishedUrl();
}
