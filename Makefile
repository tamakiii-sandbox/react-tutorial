
python=$(shell pyenv which python)
port=8080

server:
	cd public; $(python) -m http.server $(port)
