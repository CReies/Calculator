const result = document.querySelector('#result');
const operation = {
	val1: null,
	val2: null,
	operation: null,
	result: null,
};

const write = val => {
	switch (val) {
		case 'C':
			result.innerHTML = '';
			break;
		case '=':
			result.innerHTML += `<br /> =${operation.result}`;
			break;
		default:
			result.innerHTML += val;
			break;
	}
};

const resolve = () => {};

document.querySelectorAll('.btn').forEach(el => {
	el.addEventListener('click', () => write(el.value), false);
});
