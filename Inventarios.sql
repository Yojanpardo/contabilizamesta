CREATE TABLE InventarioProductos (
	id_producto SERIAL PRIMARY KEY,
	productos VARCHAR NOT NULL,
	cantidad INTEGER NOT NULL,
	precio_unidad INTEGER NOT NULL,
	precio_total INTEGER NOT NULL
);

CREATE TABLE InventarioActivos (
	id_activos SERIAL PRIMARY KEY,
	activos VARCHAR NOT NULL,
	cantidad INTEGER NOT NULL,
	precio_unidad INTEGER NOT NULL,
	precio_total INTEGER NOT NULL,
);
