###*
#
# Wrap each repository name in a link
#
###

do_wrap = (ndx) -> $(this).wrap("<a href=\"" + $(this).text + "\"/>")

$(".repository-name").each do_wrap

# silly hello, world test for jquery inclusion
$ -> alert "It works!"
