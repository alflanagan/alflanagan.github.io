###*
#
# Wrap each repository name in a link
#
###

$ -> $(".repository-name").each -> $(@).wrap("<a href=\"" + $(@).text + "\"/>")
