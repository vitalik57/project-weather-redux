import styled from "styled-components";
export const CartListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .galery_item:not(:last-child) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .update__cart {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.5);
  }
  .update__cart:hover {
    background: #fff;
  }
  .border {
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  .page {
    outline: none;
    color: black;
    text-decoration: none;
  }

  .container__svg {
    display: flex;
    flex-wrap: wrap;
  }
  .galery_item {
    padding-top: 15px;
    padding-bottom: 18px;
    text-align: center;
    list-style: none;
    width: 220px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.54);
    box-sizing: border-box;
    border-radius: 25px;
    background: rgba(16, 33, 54, 0.8);
    box-shadow: 0px 5px 33px rgba(16, 33, 54, 0.6);
  }
  .optional {
    :hover {
      background: #fff;
    }
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    justify-content: center;
    line-height: 15px;
    /* margin-right: 9px; */
    /* padding: 6px 40px; */
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }
  .optional_container {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
  }
  .peshka__pressure {
    color: #067806;
    margin: 0;
  }
  .peshka__speed {
    color: #ea9a05;
    margin: 0;
  }
  .peshka__humidity {
    color: #0906eb;
    margin: 0;
  }
  .galery_svg_humidity {
    stroke: none;
    fill: #0906eb;
  }

  .galery_svg_pressure {
    stroke: none;
    fill: #067806;
  }
  .galery_svg_speed {
    stroke: none;
    fill: #ea9a05;
    padding-right: 2px;
  }

  .galery_item_barometer {
    margin: 0px;
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .peshka {
    margin: 0px;
  }
  .peshka__humidity {
    margin: 0;
    color: #0906eb;
  }
  .galery_item_temperature {
    padding-top: 10px;
    font-size: 18px;
    line-height: 22px;
    color: #ff6b09;
  }
`;
