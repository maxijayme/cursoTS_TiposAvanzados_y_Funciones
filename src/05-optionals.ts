const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew?: boolean,	// PARÁMETRO OPCINAL.(SIEMPRE DEBEN IR AL FINAL)
	stock?: number, // PARÁMETRO OPCINAL.(SIEMPRE DEBEN IR AL FINAL)
) => {
	return {
		id,
		stock: stock ?? 10,
		isNew: isNew ?? true
	}
}

console.log(
	createProduct(1, false, 0)
) // { id: 1, stock: 0, isNew: false }

const createProduct2 = (
	id: string | number,
	isNew?: boolean,	// PARÁMETRO OPCINAL.
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return {
		id,
		stock: stock || 10,
		isNew: isNew || true
	}
}

console.log(
	createProduct2(1, false, 0)
) // { id: 1, stock: 10, isNew: true }
// 👆 JavaScript retorna los valores por defecto de `isNew` y `stock`
//		y no los que mandamos en los argumentos.

const createProduct3 = (id: string | number, isNew: boolean = true, stock: number = 10) => ({id, stock, isNew}) //OTRA FORMA DE SETEAR PARAMETROS POR DEFECTO

const p1 = createProduct3(1, true, 12)
console.log(p1)
const p2 = createProduct3(1)
console.log(p2)
const p3 = createProduct3(1, false, 0)
console.log(p3)