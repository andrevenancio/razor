#WHITESPACE_ONLY
#SIMPLE_OPTIMIZATIONS
#ADVANCED_OPTIMIZATIONS

compile() {
	java -jar compiler.jar --language_in=ECMASCRIPT5 \
	--compilation_level=SIMPLE_OPTIMIZATIONS \
	--js=../src/razor.js \
  --js=../src/debugger/razor.debugger.js \
  --js=../src/debugger/razor.logger.js \
  --js=../src/core/razor.vector2.js \
  --js=../src/utils/razor.math.js \
	--js_output_file ../build/razor.min.js 
}

txtrst=$(tput sgr0)
txtgrn=$(tput setaf 2)
txtcyn=$(tput setaf 6)

read -p "${txtgrn}Compile Razor${txtgrn}. ${txtrst} Continue (y/n)?" CONT
if [ "$CONT" == "y" ]; then
	clear
	echo "${txtgrn}compiling ${txtcyn}"
	compile
	clear
	echo "${txtgrn}compiling successfull${txtrst}"
fi
