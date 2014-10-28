###*
#
# Wrap each repository name in a link
#
###

$(".repository-name").wrap ("<a href=\"" + $(this).text + "\"/>")
