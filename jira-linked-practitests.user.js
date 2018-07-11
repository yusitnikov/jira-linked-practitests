// ==UserScript==
// @name        Jira PractiTest links
// @description Shows a link to PractiTest items in Jira issue view page
// @author      yusitnikov
// @version     1.0
// @updateURL   https://github.com/yusitnikov/jira-linked-practitests/raw/master/jira-linked-practitests.user.js
// @match       https://*.atlassian.net/browse/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

setInterval(function() {
    var $container = $('#ap-practitest-jira-addon__pt-issue-panel-right');
    if ($container.find('iframe')) {
        $container.html('<a target="_blank">View linked tests</a>');
        $container.find('a').attr('href', 'https://prod.practitest.com/search?query="' + location.pathname.split('/')[2] + '"&per_page=100');
    }
}, 500);
