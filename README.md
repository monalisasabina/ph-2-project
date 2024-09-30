# PHASE-2 PROJECT: THE TOOLS STOCKTAKING APPLICATION

## INTRODUCTION
  The tools stocktaking application is used to check the number of tools that are in an engineering store.

  The motivation behind this app is, I was working for a company where the engineering tools kept disappearing at the store. Upon investigation, it was noted that proper stocktaking was not done. So I thought why don't I come up with something quickly that would help in stocktaking process. It can be used to also check the tool availability when the technician or engineer wants to get a specific tool from the store.


## HOW TO OPEN THE APP
  To open this application you must use web browser(e.g Google Chrome) and then use this link to access the application:

  https://meek-crostata-30d4f2.netlify.app/

     

## INSTRUCTIONS
   The users are mainly the store manager and store clerks.

   The users should be able to;
   
   1. At the beginning of the shift, when the store clerk or manager open the link of this app at the browser, he/she should first see the "login" page. So the user should first login in.

     NOTE: For the purpose of the project
        username:storeadmin
        password:tools

   2. After logging in successfully, the user will be first be welcomed at the home page then proceed to click "tools" at the NavBar to access the tools page.

   3. Incase the user enters the url with wrong path, an error page will appear. A "GO BACK BUTTON" will direct the user back home.

   3. At the tools page, the user should see all tools in the store listed at this page in form of a card. The card consists of;

       * The picture of the tool

       * The name of the tool

       * The total number of the tools  is displayed

       * The number of tools available.

       * Explaining the buttons;

          - When the "TOOLS TAKEN" has been clicked. The store employee will first be met with a prompt, asking him/her to enter the name of the tool user. After typing the name and presses ok, the tool user's name will be listed at the "view tool user". The user will then click "Viee Tool User" to view the list

          - When the tool is returned, the store employee will click the "TOOL RETURNED" and will then be promoted to type the name of the tool user who has returned the tool. The name will then be removed from the list at the "view tool user".


          - 'DELETE' button: It is used delete the tool card. This is used in the case where may be the tool(s) are spoilt beyond repair and is disposed. Due to security concerns I have place a password prompt for the store manager (not a store clerk) to use it to delete the tool. A detailed report should be presented to the store manager as to why the tool was deleted. 
        
          When clicked, the user will first be met with an alert saying "Only the store manager can delete this tool". So here the store manager should press ok. Afterwards an enter password prompt will appear, if the password is successful the the tool will be deleted.

          NOTE: The password is 'password', for the project purpose.

       * "View more details": When clicked, more information about that specific tool os displayed. The user should be able to see the tool name, tool picture, a simple description of what the tool does, tool brand, tool model, tool price and the total number of that tool in the store, Basically just acts like a "tool record"




   4. Use the form to add a new tool or tools that have been bought.
       
       * The tool name should be entered in the 'NAME OF TOOL' input text box. 

       * The picture of the tool should be put in the 'PICTURE' input text box. By placing a URL of the picture.   
       
       * The brand of the tool(Toyota)

       * The model number of the tool (Corolla)

       * The price of the tool. The price the tool was bought at.

       * The total number of that new tool being brought at the store should be entered at the 'NUMBER OF TOOLS' input.

       * Once all inputs of the tool are filled, the user should CLICK the 'ADD TOOL' button to submit. Once submitted a new card of the tool is displayed.


## REFERENCES
1. Using prompt: https://reintech.io/blog/understanding-window-prompt-method

2. Inputs: https://www.w3schools.com/tags/tag_input.asp

3. Login page: https://clerk.com/blog/building-a-react-login-page-template

4. Reading material on canvas