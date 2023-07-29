const result = document.querySelector('#result');
const operation = {};

const setValues = val => {
	if (!operation.operation) {
		if (!operation.value1) operation.value1 = val;
		else operation.value += val;
	} else {
		if (!operation.value2) operation.value2 = val;
		else operation.value += val;
	}
};

const resolve = () => {
	switch (operation.operation) {
		case '+':
			operation.result = Number(operation.value1) + Number(operation.value2);
			break;
		case '-':
			operation.result = Number(operation.value1) - Number(operation.value2);
			break;
		case '*':
			operation.result = Number(operation.value1) * Number(operation.value2);
			break;
		case '/':
			operation.result = Number(operation.value1) / Number(operation.value2);
			break;
	}
	operation.value1 = operation.result;
	operation.value2 = undefined;
	operation.operation = undefined;
};

const setOperation = val => {
	if (!operation.operation) {
		operation.operation = val;
		return;
	}
	resolve();
	operation.operation = val;
};

const write = val => {
	switch (val) {
		case 'C':
			result.innerHTML = '';
			operation.value1 = undefined;
			operation.value2 = undefined;
			operation.operation = undefined;
			operation.result = undefined;
			break;
		case '=':
			resolve();
			if (operation.result) result.innerHTML += `=<br />${operation.result}`;
			operation.result = undefined;
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			setOperation(val);
			result.innerHTML += val;
			break;
		default:
			setValues(val);
			result.innerHTML += val;
			break;
	}
};

document.querySelectorAll('.btn').forEach(el => {
	el.addEventListener('click', () => write(el.value), false);
});
