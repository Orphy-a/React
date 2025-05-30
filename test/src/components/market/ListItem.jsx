import React from "react";
import { PRODUCT_THUMB } from "../../api/_http";

const ListItem = (product) => {
  return (
    <tr>
      <td>
        <a href="./view.html">
          <img src={`${PRODUCT_THUMB}/${product}`} class="thumbnail" alt="사과 500g" />
        </a>
      </td>
      <td class="type">과일</td>
      <td class="title">
        <a href="#">사과 500g</a>
      </td>
      <td class="discount">10%</td>
      <td class="point">400P</td>
      <td class="price">
        <strong>3,600</strong>
        <del>4,000</del>
      </td>
    </tr>
  );
};

export default ListItem;
