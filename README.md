 This is the RLV test and memory example app. Built with NativeScript 5.2+ and Angular.
 
 Its purpose is to compare RadListView's performance against *nGFor.
 
 It is also to test out memory use.
 
 To use, clone/download the app, and run (using webpack, recommended);
 
 $ tns run ios --bundle --env.uglify --env.aot
 
 Mainly, the app has 3 different lists:
 
 1) RadListView with a dataset of about 24 items. The text within each item varies a little. This list appears "glitchy", because if you load the page and, as the FIRST scroll action, pull the list down and release, the list glitches (top item appears in two places at once). If you do not see this behavior, try leaving the page, loading it again, and trying a few more times. In my experience, this glitch occurs once the dataset gets to about 10(!) items or more.
 
 2) *ngFor List with the same dataset. The glitch does not appear here.
 
 3) RLV with a different dataset of about the same number of items. The values in this dataset are similar to each other; as a result, RLV seems to handle it better.
 ****
 Comparing List 1 (RLV) to List 2 (ngFor), you are likely to see the following issues with List 1:
 
    i) Glitch occurs when you load the list and the first scroll action you take is to pull the list down and release.
 
    ii) If you click on an item in the list, the text expands. However, the container does not resize, so that the larger text is now hidden.
 
    iii) The background should be gray in the list area. But it stays white.
 
    iv) Generally I have found the scroll to be smoother with ngFor.
****
 This app also serves as a memory test. Info on that:
  
  If you want to test memory use, try to build up a lot of memory. You can click on the video page at top right.
  
  Even better, you can click on the red button here, and then go through to the other lists from there. On the last list (RLV with uniform data), you can also add items to local storage, to further use memory. Then, come back to the home page and see if memory use clears out.
