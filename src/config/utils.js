// 获取路径参数
export const getQueryString = (name) => {
	if (window.location.href.indexOf("?") < 0) {
		return;
	}
	let result = {};
	let map = window.location.href.split("?")[1].split("&");
	map.forEach(item => {
		let key = item.split("=")[0];
		let value = item.split("=")[1];
		result[key] = value;
	})

	return result[name];
}