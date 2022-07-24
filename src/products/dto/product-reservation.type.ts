import { createUnionType } from "@nestjs/graphql";
import { Product } from "src/products/dto/product.entity";
import { Reservation } from "src/reservations/dto/reservation.entity";


export const ProductReservation = createUnionType({
  name: "ProductReservation",
  types: () => [Product, Reservation] as const,
  resolveType(value) {
      if(value.price) {
          return Product;
      } else {
          return Reservation;
      }
  }
})