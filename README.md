# session-life-test
Testing of how long a browser session persists.

Google Chrome Version 97.0.4692.99 on Windows is not clearing the session when restoring a tab from the history. This site has been created to test and demo that issue.

 * When this page is first loaded (or the Update Session time button is pressed) the session variable with the time is updated from the server.
 * Each time the browser is refreshed (F5) the current time is updated.
 * When a new tab opened to this site, the there will be a new session storage and a new session time.

#The Problem:
A new session is NOT create when restoring a tab from history. To reproduce, using Google Chrome on Windows do the following:

 1. Make sure there is at least one other tab or instance of Chrome open, whether or not there is a website loaded is not relevant.
 2. Load this site and record the session time.
 3. Close the tab that is displaying this site.
 4. Open either a new tab or new instance of Chrome.
 5. Go to the browser History and restore the tab that was just closed.
 
The session time is the same time recorded in step 2. As long as there is at least one instance of Chrome running, when restoring from history, the session will also be restored.

This is not the way eitehr Edge or Firefox is currently working. Both created a new session. Which browser is working correctly?
