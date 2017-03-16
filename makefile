
PATH  := node_modules/.bin:$(PATH)

source_server_scripts := Source/Scripts/%.js
built_server_scripts  := Built/Scripts/%.js

$(built_server_scripts):$(source_server_scripts)
	cp $< $@
