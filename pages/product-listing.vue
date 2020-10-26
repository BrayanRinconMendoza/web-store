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
                                <tr color="indigo lighten-1">
                                    <th class="text-left">
                                        Name
                                    </th>
                                    <th class="text-left">
                                        Calories
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
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
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
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