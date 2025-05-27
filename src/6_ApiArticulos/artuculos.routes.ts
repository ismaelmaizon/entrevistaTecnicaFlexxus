import { Router } from 'express'
import * as articulosControllers from './articulo.controllers'

const router = Router()

/**
 * @openapi
 * /api/articulos:
 *   get:
 *     summary: Obtener todos los artículos
 *     tags:
 *       - Artículos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de artículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Articulo'
 *       500:
 *         description: Error interno al obtener artículos
 */
router.get('/', articulosControllers.listar)

/**
 * @openapi
 * /api/articulos/{id}:
 *   get:
 *     summary: Obtener un artículo por ID
 *     tags:
 *       - Artículos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del artículo a obtener
 *     responses:
 *       200:
 *         description: Artículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Articulo'
 *       404:
 *         description: Artículo no encontrado
 *       400:
 *         description: ID inválido
 */
router.get('/:id', articulosControllers.obtener)

/**
 * @openapi
 * /api/articulos/create:
 *   post:
 *     summary: Crear un nuevo artículo
 *     tags:
 *       - Artículos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevoArticulo'
 *           examples:
 *             mínimo:
 *               summary: Solo campos obligatorios
 *               value:
 *                 nombre: Notebook i7 16GB RAM
 *                 marca: Lenovo
 *             completo:
 *               summary: Todos los campos posibles
 *               value:
 *                 nombre: Notebook i7 16GB RAM
 *                 marca: Lenovo
 *                 activo: true
 *                 fechaModificacion: "2025-05-26T23:21:53.000Z"
 *     responses:
 *       200:
 *         description: Artículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                 id:
 *                   type: integer
 *       400:
 *         description: Datos inválidos
 */
router.post('/create', articulosControllers.crear)

/**
 * @openapi
 * /api/articulos/update/{id}:
 *   put:
 *     summary: Actualizar parcialmente un artículo
 *     tags:
 *       - Artículos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del artículo a actualizar
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarArticulo'
 *           examples:
 *             nombreMarca:
 *               summary: Solo nombre y marca
 *               value:
 *                 nombre: Notebook i7 16GB RAM
 *                 marca: Lenovo
 *             conActivoYFecha:
 *               summary: Todos los campos
 *               value:
 *                 nombre: Notebook i7 16GB RAM
 *                 marca: Lenovo
 *                 activo: true
 *                 fechaModificacion: "2025-05-26T23:21:53.000Z"
 *     responses:
 *       200:
 *         description: Artículo actualizado o sin cambios
 *       400:
 *         description: Datos inválidos o sin campos válidos
 *       404:
 *         description: Artículo no encontrado
 */

router.put('/update/:id', articulosControllers.actualizar)

/**
 * @openapi
 * /api/articulos/{id}:
 *   delete:
 *     summary: Desactivar (eliminar lógicamente) un artículo
 *     tags:
 *       - Artículos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del artículo a desactivar
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Artículo desactivado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Artículo desactivado correctamente
 *       400:
 *         description: El artículo ya está desactivado o ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: Artículo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.delete('/:id', articulosControllers.eliminar)

export default router
