<template>
    <section class="product-listing-content">
        <v-container>
            <v-row>
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                    <div class="main-content">
                        <h4>Listado de Productos</h4>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                               <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    color="indigo lighten-1"
                                    outlined  
                                    small 
                                    href="/product-registration"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dark>
                                        mdi-plus
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Registrar un nuevo producto</span>
                        </v-tooltip>
                    </div>
                    <v-simple-table 
                        fixed-header
                        class="indigo lighten-1"
                    >
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left indigo lighten-1">
                                        Referencia
                                    </th>
                                    <th class="text-left indigo lighten-1">
                                        Nombre
                                    </th>
                                    <th class="text-left indigo lighten-1">
                                        Precio
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="item in products"
                                    :key="item.nombre"
                                >
                                    
                                    <td>{{ item.referencia }}</td>
                                    <td>{{ item.nombre }}</td>
                                    <td>{{ item.precio }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </div>
                <div class="col-lg-3"></div>
            </v-row>
        </v-container>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            referencia: '001',
            nombre: 'GW',
            precio: 160,
          },
          {
            referencia: '002',
            nombre: 'GW',
            precio: 179,
          },
          {
            referencia: '003',
            nombre: 'GW',
            precio: 190,
          },
          {
            referencia: '004',
            nombre: 'GW',
            precio: 130,
          },
          {
            referencia: '005',
            nombre: 'GW',
            precio: 147,
          }
        ],
      }
    },
  }
</script>

<style lang="scss">
    .product-listing-content {
        background-color: white;
        height: auto;
        .main-content {
            align-content: space-between;
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
            h4 {
            color: #000000;
            font-size: 30px;
            margin-right: 30px;
            }
        }
    }
</style>