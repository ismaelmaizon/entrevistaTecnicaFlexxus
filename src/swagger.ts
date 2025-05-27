import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Artículos',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de artículos'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Articulo: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Fideos' },
            marca: { type: 'string', example: 'Marolio' },
            activo: { type: 'boolean', example: true },
            fechaModificacion: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-26T18:00:00Z'
            }
          },
          required: ['id', 'nombre', 'marca', 'activo', 'fechaModificacion']
        },
        NuevoArticulo: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Fideos' },
            marca: { type: 'string', example: 'Marolio' },
            activo: { type: 'boolean', example: true },
            fechaModificacion: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-26T18:00:00Z'
            }
          },
          required: ['nombre', 'marca'] // activo y fechaModificacion son opcionales
        },
        ActualizarArticulo: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Notebook i7 16GB RAM' },
            marca: { type: 'string', example: 'Lenovo' },
            activo: { type: 'boolean', example: true },
            fechaModificacion: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-26T23:21:53.000Z'
            }
          },
          required: [] // todos los campos son opcionales
        }

      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./src/**/*.ts']
})
