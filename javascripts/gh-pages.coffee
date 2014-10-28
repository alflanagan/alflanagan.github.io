###*
#
# Wrap each repository name in a link
#
###

$ -> $(".repository-name").each -> $(this).wrap("<a href=\"" + $(this).text + "\"/>")
