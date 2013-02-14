SpamAssassin.js
===============

Postmark Spam Assassin Pure JS


An example of how to use this from a form page.  


    <form id="spamCheckForm">
    <div>
        <label id="lblEmailAddress">Email Address<input type="text" id="txtEmailAddress"></input></label>
        <label id="lblEmailMessage">Email Message<input type="text" id="txtEmailMessage"></input></label>
        /* Continue with these inputs, or assign them using your javascript form the page, etc */
        

        <div id="divResults"></div>
        <div id="divScore"></div>
        <div id="divReport"></div>  // monospace font!

        <input type="button" onclick="javascript: sendJsonSubmission();" />
    </div>
    </form>
