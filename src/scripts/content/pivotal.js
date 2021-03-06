/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

"use strict";

togglbutton.render('form.story:not(.toggl)', {observe: true}, function (elem) {
  var link,
    titleElem = $('textarea', elem),
    container = $('.edit aside', elem),
    projectName = $('title').textContent,
    projectIdElem = $('[id*=copy_id_value]');

  if (titleElem === null || container === null) {
    return;
  }

  link = togglbutton.createTimerLink({
    className: 'pivotal',
    description: projectIdElem.getAttribute('value') + ": " + titleElem.value,
    projectName: projectName && projectName.split(' -').shift()
  });

  container.appendChild(link);
});
