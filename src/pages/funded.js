import React, { useEffect, useRef } from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import { document } from "browser-monads";
import { HomeWrapper } from "../components/home/home.css";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import { Box, Container, MantineProvider, Text, Title, Grid } from "@mantine/core";
import { Image } from "react-bootstrap";
import { PopupButton } from "react-calendly";
import gsap from "gsap";
import { FundedWrapper } from "../styles/portfolio.css";

const Funded = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    const animateArrow = () => {
      gsap.fromTo(
        arrow,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1.1, duration: 0.2, ease: "back.out(4)" }
      );
    };

    const hideArrow = () => {
      gsap.set(arrow, { opacity: 0, scale: 0.5 });
    };

    const parent = arrow.parentElement;
    parent.addEventListener("mouseenter", animateArrow);
    parent.addEventListener("mouseleave", hideArrow);

    return () => {
      parent.removeEventListener("mouseenter", animateArrow);
      parent.removeEventListener("mouseleave", hideArrow);
    };
  }, []);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      showBanner={false}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <FundedWrapper>
            <div>
              <svg width="100%" height="400" style={{position: 'absolute', margin: 'auto'}} viewBox="0 0 9725 2504" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 951.973C276.687 588.989 710.474 139.382 1237.88 144.157C1610.6 147.533 1820.07 375.905 2574.74 951.973C3582.42 1721.25 4093.81 2105.65 4461.33 2094.75C5168.44 2073.72 5210.16 1324.02 6297.95 1030.78C6465.12 985.734 7323.1 754.468 8059.58 1139.16C8810.63 1531.42 8866.48 2267.08 8871.69 2360.74" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M14.9863 979.608C294.049 600.129 730.634 135.619 1258.71 140.876C1641.28 145.121 1854.55 423.074 2602.95 985.203C3597.66 1736.15 4093.76 2066.25 4468.51 2052.74C5175.87 2029.25 5235.77 1339.17 6318.74 1054.41C6498.69 1007.1 7336.36 741.783 8067.59 1116.87C8807.83 1499.78 8871.69 2229.99 8891.03 2363.97" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M28.9727 1007.29C311.363 611.367 750.794 131.857 1279.5 137.693C1671.95 142.806 1890.34 468.508 2631.12 1018.48C3614.64 1748.7 4093.66 2025.83 4475.65 2010.78C5183.24 1982.9 5261.52 1355.18 6339.53 1078.05C6532.26 1028.51 7350.92 726.639 8075.59 1094.64C8806.29 1465.68 8876.9 2192.95 8910.42 2367.25" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M42.9609 1034.93C328.728 622.507 770.907 128.046 1300.29 134.412C1702.58 140.345 1925.45 514.808 2659.28 1051.71C3630.65 1762.44 4093.52 1985.94 4482.84 1968.77C5190.62 1937.57 5287.52 1371.77 6360.32 1101.63C6565.87 1049.88 7364.82 712.651 8083.6 1072.31C8804.07 1432.78 8882.15 2155.81 8929.76 2370.44" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M56.9473 1062.57C346.042 633.699 791.067 124.238 1321.12 131.184C1733.25 137.984 1960.57 561.16 2687.5 1084.99C3646.71 1776.19 4093.47 1946.15 4490.02 1926.86C5198.05 1892.38 5313.71 1389.04 6381.15 1125.31C6599.54 1071.34 7378.71 698.811 8091.7 1050.08C8801.9 1399.99 8887.46 2118.77 8949.24 2373.72" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M70.9336 1090.25C363.405 644.888 811.275 119.366 1341.91 127.951C1763.93 134.752 1995.58 607.461 2715.66 1118.22C3662.67 1789.98 4093.37 1906.31 4497.16 1884.85C5205.43 1847.18 5339.95 1406.6 6401.94 1148.9C6633.16 1092.81 7392.55 684.871 8099.71 1027.79C8799.63 1367.19 8892.67 2081.73 8968.58 2377" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M84.873 1117.89C380.72 656.076 831.388 115.41 1362.65 124.67C1794.51 132.194 2030.55 653.761 2743.78 1151.45C3678.54 1803.73 4093.23 1866.47 4504.3 1842.84C5212.76 1802.09 5366.28 1424.58 6422.68 1172.48C6666.73 1114.27 7406.34 670.98 8107.67 1005.46C8797.27 1334.34 8897.83 2044.59 8987.92 2380.18" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M98.8613 1145.57C398.036 667.268 851.55 111.553 1383.44 121.489C1825.18 129.736 2065.52 700.161 2771.95 1184.78C3694.41 1817.62 4093.09 1826.83 4511.44 1800.93C5220.14 1757.09 5392.71 1442.96 6443.47 1196.21C6700.39 1135.88 7420.09 657.187 8115.67 983.275C8794.91 1301.69 8903.09 2007.6 9007.27 2383.51" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M112.848 1173.21C415.399 678.456 871.71 107.597 1404.27 118.208C1855.86 127.179 2100.53 746.461 2800.17 1217.96C3710.33 1831.36 4093.04 1786.99 4518.63 1758.87C5227.57 1712.04 5419.29 1461.48 6464.25 1219.75C6734.01 1157.34 7433.84 643.248 8123.68 960.943C8792.54 1268.94 8908.3 1970.46 9026.65 2386.69" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M126.834 1200.89C432.713 689.644 891.869 103.738 1425.06 114.976C1886.53 124.718 2135.45 792.81 2828.33 1251.24C3726.1 1845.25 4092.89 1747.3 4525.81 1716.96C5234.95 1667.23 5445.91 1480.39 6485.09 1243.43C6767.72 1178.99 7447.63 629.501 8131.73 938.708C8790.18 1236.34 8913.55 1933.47 9046.04 2390.02" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M140.82 1228.53C450.076 700.837 911.981 99.8824 1445.85 111.747C1917.16 122.213 2170.37 839.163 2856.5 1284.53C3741.87 1859.15 4092.8 1707.65 4532.95 1675C5242.33 1622.38 5472.53 1499.44 6505.83 1267.07C6801.34 1200.6 7461.23 615.71 8139.69 916.428C8787.72 1203.69 8918.71 1896.38 9065.38 2393.25" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M154.807 1256.16C467.39 711.977 932.141 95.9744 1466.68 108.466C1947.88 119.704 2205.24 885.511 2884.76 1317.71C3757.69 1872.99 4092.8 1667.91 4540.18 1632.94C5249.8 1577.48 5499.3 1518.59 6526.71 1290.6C6835.15 1222.16 7474.97 601.818 8147.79 894.096C8785.31 1171.04 8924.07 1859.24 9084.82 2396.43" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M168.795 1283.85C484.754 723.213 952.303 92.1625 1487.47 105.281C1978.51 117.291 2240.06 931.956 2912.93 1351.03C3773.32 1886.97 4092.65 1628.36 4547.37 1591.03C5257.18 1532.81 5526.07 1538.07 6547.55 1314.28C6868.86 1243.91 7488.67 588.071 8155.85 871.86C8782.85 1138.53 8929.33 1822.2 9104.26 2399.71" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M182.781 1311.48C502.069 734.404 972.463 88.3056 1508.26 102.003C2009.18 114.784 2274.89 978.307 2941.1 1384.26C3788.94 1900.91 4092.56 1588.71 4554.51 1549.07C5264.56 1488.11 5552.79 1557.61 6568.29 1337.92C6902.53 1265.62 7502.18 574.375 8163.81 849.579C8780.24 1106.02 8934.49 1785.16 9123.55 2402.95" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M196.768 1339.17C519.431 745.594 992.622 84.4958 1529.09 98.7721C2039.86 112.373 2309.66 1024.71 2969.31 1417.5C3804.57 1914.85 4092.46 1549.12 4561.7 1507.06C5271.99 1443.4 5579.65 1577.24 6589.12 1361.55C6936.29 1287.37 7515.78 560.629 8171.86 827.345C8777.69 1073.61 8939.74 1748.12 9142.98 2406.27" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M210.754 1366.8C536.793 756.782 1012.78 80.6842 1549.88 95.5393C2070.48 109.912 2344.34 1071.15 2997.43 1450.77C3820 1928.93 4092.31 1509.57 4568.83 1465.1C5279.37 1398.83 5606.42 1597.06 6609.86 1385.18C6969.95 1309.17 7529.23 546.979 8179.82 805.061C8775.03 1041.2 8944.95 1711.03 9162.28 2409.5" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M224.744 1394.49C554.112 767.973 1032.95 76.9234 1570.67 92.309C2101.16 107.502 2379.07 1117.6 3025.65 1484.05C3835.49 1943.02 4092.27 1470.02 4576.02 1423.14C5286.8 1354.27 5633.34 1616.98 6630.7 1408.81C7003.71 1330.97 7542.79 533.331 8187.88 782.828C8772.38 1008.89 8950.21 1673.99 9181.72 2412.78" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M238.73 1422.12C571.474 779.161 1053.11 73.112 1591.46 89.0764C2131.79 105.089 2413.65 1164.09 3053.81 1517.28C3850.92 1957.1 4092.12 1430.52 4583.16 1381.18C5294.18 1309.75 5660.15 1636.99 6651.49 1432.45C7037.43 1352.82 7556.2 519.728 8195.88 760.544C8769.68 976.57 8955.42 1636.9 9201.06 2416.02" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M252.717 1449.76C588.788 790.304 1073.27 69.3025 1612.29 85.7974C2162.51 102.63 2448.32 1210.54 3082.03 1550.52C3866.31 1971.28 4092.07 1390.97 4590.39 1339.17C5301.65 1265.18 5687.11 1657.01 6672.32 1456.03C7071.19 1374.67 7569.65 506.08 8203.93 738.214C8766.98 944.256 8960.67 1599.81 9220.49 2419.2" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M266.654 1477.45C606.102 801.541 1093.38 65.5398 1633.03 82.5653C2193.09 100.266 2482.81 1257.08 3110.14 1583.79C3881.5 1985.51 4091.93 1351.56 4597.48 1297.21C5308.98 1220.71 5713.93 1677.17 6693.06 1479.66C7104.9 1396.61 7582.96 492.575 8211.94 715.979C8764.23 912.134 8965.93 1562.77 9239.83 2422.53" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M280.641 1505.08C623.416 812.681 1113.54 61.7773 1653.82 79.3333C2223.76 97.8539 2517.29 1303.62 3138.31 1617.02C3896.74 1999.74 4091.83 1312.06 4604.62 1255.2C5316.36 1176.24 5740.84 1697.38 6713.8 1503.3C7138.61 1418.56 7596.23 479.118 8219.9 693.696C8761.33 880.011 8971.09 1525.68 9259.17 2425.76" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M294.629 1532.77C640.781 823.92 1133.7 58.0168 1674.65 76.1033C2254.44 95.4921 2551.78 1350.26 3166.53 1650.31C3911.93 2014.11 4091.78 1272.71 4611.86 1213.24C5323.84 1131.87 5767.8 1717.64 6734.68 1526.93C7172.47 1440.55 7609.59 465.663 8228 671.415C8758.59 847.939 8976.4 1488.59 9278.61 2428.99" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M308.615 1560.4C658.143 835.061 1153.86 54.2541 1695.44 72.8229C2285.06 93.0798 2586.17 1396.85 3194.69 1683.54C3926.98 2028.53 4091.69 1233.25 4618.99 1171.28C5331.27 1087.5 5794.71 1738.04 6755.47 1550.56C7206.23 1462.59 7622.8 452.35 8236.01 649.18C8755.65 816.01 8981.61 1451.59 9298 2432.27" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M322.602 1588.09C675.457 846.301 1174.02 50.5425 1716.23 69.6419C2315.74 90.7669 2620.51 1443.59 3222.86 1716.82C3942.03 2043 4091.59 1193.95 4626.13 1129.32C5338.64 1043.18 5821.63 1758.44 6776.21 1574.2C7239.95 1484.68 7635.97 439.041 8243.96 626.899C8752.65 784.083 8986.81 1414.51 9317.29 2435.5" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M336.588 1615.72C692.82 857.44 1194.18 46.7779 1737.06 66.3596C2346.41 88.3528 2654.85 1490.32 3251.07 1750.05C3957.03 2057.56 4091.54 1154.54 4633.37 1087.31C5346.17 998.852 5848.68 1778.84 6797.09 1597.78C7273.8 1506.77 7649.18 425.775 8252.07 604.566C8749.81 752.2 8992.12 1377.37 9336.78 2438.73" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M350.576 1643.36C710.136 868.629 1214.34 43.0156 1757.85 63.1278C2377.09 85.9892 2689.09 1537.15 3279.29 1783.32C3971.93 2072.23 4091.49 1115.28 4640.55 1045.35C5353.6 954.576 5875.64 1799.34 6817.88 1621.41C7307.57 1528.96 7662.3 412.656 8260.07 582.331C8746.77 720.464 8997.33 1340.33 9356.12 2442.01" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M364.564 1671.05C727.501 879.821 1234.45 39.3523 1778.64 59.8986C2407.71 83.6763 2723.29 1584.04 3307.46 1816.56C3986.79 2086.99 4091.45 1075.93 4647.69 1003.39C5361.02 910.351 5902.61 1819.89 6838.67 1645.05C7341.38 1551.14 7675.38 399.588 8268.08 560.051C8743.69 688.827 9002.54 1303.29 9375.51 2445.25" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M378.551 1698.68C744.815 891.008 1254.61 35.5878 1799.43 56.6163C2438.34 81.3105 2757.39 1630.96 3335.62 1849.79C4001.55 2101.79 4091.35 1036.66 4654.88 961.376C5368.5 866.073 5929.57 1840.43 6859.5 1668.68C7375.24 1573.42 7688.45 386.611 8276.14 537.766C8740.65 657.233 9007.85 1266.19 9394.9 2448.47" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M392.537 1726.37C762.177 902.2 1274.77 31.9248 1820.26 53.4357C2469.06 79.0462 2791.53 1678.09 3363.84 1883.12C4016.26 2116.84 4091.35 997.455 4662.06 919.466C5375.98 821.896 5956.58 1861.12 6880.29 1692.36C7409.04 1595.76 7701.42 373.832 8284.14 515.582C8737.51 625.838 9013.05 1229.2 9414.28 2451.8" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M406.523 1754C779.492 913.388 1294.93 28.1623 1841.05 50.1555C2499.69 76.6824 2825.58 1725.21 3392 1916.3C4030.92 2131.89 4091.25 958.147 4669.2 877.408C5383.4 777.619 5983.49 1881.67 6901.08 1715.9C7442.85 1618.04 7714.34 361.002 8292.15 493.203C8734.38 594.391 9018.26 1192.02 9433.62 2454.99" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M420.512 1781.69C796.856 924.578 1315.1 24.4971 1861.84 46.9243C2530.32 74.3676 2859.54 1772.47 3420.17 1949.58C4045.48 2147.13 4091.21 918.984 4676.39 835.496C5390.88 733.537 6010.5 1902.41 6921.87 1739.58C7476.66 1640.47 7727.27 348.463 8300.16 470.969C8731.19 563.138 9023.47 1154.98 9453.01 2458.27" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M434.498 1809.32C814.218 935.766 1335.25 20.7814 1882.67 43.691C2561.04 72.0989 2893.54 1819.88 3448.39 1982.86C4060.05 2162.51 4091.21 879.819 4683.58 793.534C5398.35 689.404 6037.51 1923.15 6942.7 1763.21C7510.52 1662.89 7740.2 336.017 8308.21 448.732C8728.01 532.027 9028.78 1117.98 9472.4 2461.55" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M448.436 1836.96C831.484 946.907 1355.37 17.0674 1903.41 40.4111C2591.62 69.7353 2927.4 1867.34 3476.5 2016.04C4074.47 2177.95 4091.11 840.607 4690.66 751.476C5405.78 645.176 6064.42 1943.79 6963.44 1786.75C7544.33 1685.27 7752.98 323.622 8316.17 426.353C8724.73 500.87 9033.94 1080.8 9491.74 2464.68" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M462.422 1864.64C848.846 958.146 1375.48 13.4026 1924.2 37.2286C2622.24 67.5175 2961.26 1915.09 3504.67 2049.37C4088.99 2193.72 4091.06 801.54 4697.85 709.565C5413.26 601.142 6091.38 1964.62 6984.23 1810.48C7578.14 1707.94 7765.81 311.613 8324.22 404.216C8721.55 470.099 9039.19 1043.85 9511.13 2468.06" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M476.41 1892.28C866.162 969.287 1395.64 9.68858 1944.99 33.9486C2652.92 65.2021 2995.07 1962.94 3532.84 2082.6C4103.36 2209.54 4091.01 762.425 4704.99 667.555C5420.73 557.011 6118.34 1985.36 7005.01 1834.06C7612 1730.46 7778.64 299.652 8332.23 381.885C8718.27 439.231 9044.4 1006.71 9530.52 2471.29" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M490.398 1919.96C883.527 980.526 1415.75 7.08568 1965.82 30.7187C2683.55 64.2873 3028.97 2010.98 3561.05 2115.88C4117.78 2225.6 4091.01 723.36 4712.18 625.645C5428.21 513.026 6145.35 2006.25 7025.8 1857.75C7645.86 1753.18 7791.42 287.981 8340.24 359.652C8714.99 408.606 9049.66 969.722 9549.86 2474.57" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M504.385 1947.6C900.841 991.667 1435.91 3.27495 1986.61 27.4868C2714.17 61.9235 3062.78 2059.21 3589.22 2149.11C4132.2 2241.81 4090.97 684.244 4719.36 583.635C5435.73 468.942 6172.36 2027.04 7046.64 1881.33C7679.76 1775.8 7804.25 276.454 8348.29 337.369C8711.8 378.076 9054.92 932.633 9569.3 2477.8" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M518.371 1975.23C918.204 1002.86 1456.07 -0.536103 2007.4 24.2062C2744.8 59.5111 3096.59 2107.63 3617.39 2182.34C4146.62 2258.25 4090.96 645.176 4726.5 541.625C5443.21 424.859 6199.27 2047.87 7067.43 1904.91C7713.62 1798.52 7817.08 265.167 8356.3 315.037C8708.57 347.593 9060.13 895.494 9588.64 2480.98" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M532.357 2002.92C935.566 1014.05 1476.23 -4.29789 2028.23 21.0232C2775.52 57.1963 3130.5 2156.39 3645.6 2215.67C4161.14 2274.94 4090.96 606.255 4733.69 499.713C5450.73 380.873 6226.28 2068.8 7088.21 1928.6C7747.53 1821.38 7829.91 254.267 8364.3 292.803C8705.34 317.401 9065.33 858.453 9608.03 2484.31" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M546.346 2030.56C952.882 1025.23 1496.39 -8.06042 2049.02 17.743C2806.15 54.7842 3164.36 2205.34 3673.82 2248.85C4175.71 2291.72 4091.01 567.187 4740.92 457.704C5458.31 336.838 6253.34 2089.64 7109.1 1952.18C7781.48 1844.19 7842.88 243.608 8372.4 270.52C8702.25 287.305 9070.69 821.363 9627.46 2487.54" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M560.332 2058.24C970.245 1036.42 1516.55 -11.8225 2069.81 14.5114C2836.77 52.4208 3198.36 2254.59 3701.98 2282.13C4190.32 2308.85 4091.01 528.217 4748.06 415.743C5465.78 292.851 6280.25 2110.57 7129.84 1975.86C7815.34 1867.15 7855.76 233.334 8380.36 248.286C8699.07 257.353 9075.85 784.37 9646.8 2490.82" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M574.318 2085.88C987.559 1047.62 1536.67 -15.6311 2090.64 11.2817C2867.5 50.0592 3232.46 2304.12 3730.2 2315.41C4205.08 2326.16 4091.01 489.296 4755.25 373.784C5473.35 248.914 6307.26 2131.5 7150.67 1999.5C7849.25 1890.16 7869.41 201.841 8388.42 226.005C8695.74 240.329 9081.11 747.282 9666.19 2494.05" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M588.305 2113.56C1004.92 1058.85 1556.83 -19.3951 2111.43 8.04819C2898.12 47.6938 3266.7 2341.69 3758.36 2348.64C4219.93 2355.15 4091.2 451.337 4762.43 331.773C5481.07 205.939 6334.22 2152.39 7171.46 2023.08C7883.15 1913.16 7881.99 213.849 8396.42 203.72C8693.14 197.884 9086.31 710.191 9685.58 2497.28" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M602.293 2141.2C1022.24 1069.99 1576.99 -23.204 2132.22 4.76985C2928.75 45.2836 3301.04 2404.05 3786.53 2381.87C4235.03 2361.37 4091.16 411.934 4769.57 289.814C5488.5 161.52 6361.33 2174.57 7192.25 2046.71C7917.25 1937.28 7895.31 204.783 8404.43 181.439C8690.29 168.368 9091.57 673.103 9704.92 2500.56" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
                <path d="M616.279 2168.83C1039.6 1081.18 1597.15 -26.9659 2153.01 1.53842C2959.42 42.9204 3335.67 2454.5 3814.7 2415.15C4250.32 2379.31 4091.06 372.529 4776.71 247.853C5495.88 117.051 6388.05 2194.35 7213.04 2070.35C7951.01 1959.42 7908.81 196.149 8412.44 159.156C8687.54 138.948 9096.78 636.061 9724.31 2503.8" stroke="#DB1F2B" stroke-width="1.1262" stroke-miterlimit="10"/>
              </svg>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', height: 220 }}>
                <Image
                  src="https://i.imgur.com/ixKq6iO.png"
                  style={{width: 140, objectFit: 'contain'}}
                />
                <Image
                  src="https://i.imgur.com/IuyDhcu.png"
                  style={{width: 80, objectFit: 'contain', marginLeft: 15}}
                />
                <Image
                  src="https://i.imgur.com/L2M61es.png"
                  style={{width: 200, objectFit: 'contain'}}
                />
              </div>
            </div>
            {/* <Container
              size='md'
              py={40}
              // px={0}
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            > */}
            <div style={{maxWidth: 900, margin: 'auto', marginTop: 40, padding: 20}}>
              <Title size={48}>
                Pentafox Technologies Secures Seed Investment
              </Title>
              <Text size={22} mt={6} color="gray">
                Pentafox Technologies Private Limited Secures Strategic
                Investment from Pentagon International Freight Solutions Private
                Limited to Accelerate Innovation and Growth
              </Text>

              <MantineProvider theme={{ fontSizes: { md: 16 }, fontFamily: "Varela Round", }}>
                <Box style={{ textJustify: "inter-word", textAlign: "justify" }}>
                  <Text mt={32} size='md' >
                    <span style={{ fontWeight: "bold", fontSize: 20, lineHeight: 0 }}>P</span>
                    entafox Technologies Private Limited (Pentafox Technologies),
                    renowned for its pioneering approach in cloud solutions, AI
                    integration, and comprehensive digital transformation services,
                    is excited to announce that it has secured a strategic
                    investment from Pentagon International Freight Solutions Private
                    Limited (Pentagon Freight). This milestone is set to propel the
                    company into a new phase of innovation and expansive growth.
                  </Text>

                  <Text mt={18} size='md'>
                    This investment signifies a crucial pivot for Pentafox
                    Technologies, enabling it to escalate its operational
                    capacities, refine its service offerings, and broaden its
                    international presence. The partnership is grounded in the
                    mutual commitment of both entities to drive technological
                    advancements that solve contemporary digital challenges
                    effectively. Pentagon Freight's ambition to transition into a
                    tech-enabled freight forwarder aligns perfectly with Pentafox
                    Technologies’ expertise in delivering state-of-the-art
                    technology solutions. This synergy underscores the investment,
                    marking a strategic move towards realizing Pentagon Freight's
                    vision of expanding its global footprint through technology.
                  </Text>

                  <Box mt={18}>
                    <Text mt={9} size='md'>
                      Vignesh Sankaran, CEO and Co-founder of Pentafox Technologies,
                      echoed this sentiment, emphasizing the investment's
                      significance beyond financial aspects. "This partnership
                      validates our mission and technological prowess, signalling a
                      leap towards greater achievements. It’s a testament to our
                      team’s hard work and the innovative solutions we bring to the
                      market," he said.
                    </Text>
                  </Box>

                  <Text mt={18} size='md'>
                    Mr. Paresh Bhanushali, Chairman & Managing Director of the
                    Pentagon Group of Companies, expressed enthusiasm about the
                    collaboration, stating, "Pentafox Technologies has emerged as a
                    pivotal force in the realms of Digital Mobility and Cloud
                    Solutions. Their dedication to pushing the boundaries of
                    innovation and excellence mirrors our investment ethos. We are
                    thrilled to support Pentafox Technologies’ journey towards
                    setting new industry benchmarks."
                  </Text>

                  <Text mt={18} size='md'>
                    As Pentafox Technologies embarks on this promising new chapter,
                    the company is energized by the shared vision of leveraging
                    technology to not only enhance global connectivity but also to
                    drive unparalleled growth. With a strong partner by its side,
                    Pentafox Technologies is committed to harnessing the
                    transformative power of technology to make a lasting impact on
                    the industry and beyond.
                  </Text>

                  <Text mt={18} size='md'>
                    For more information, please email us at:
                    <a href="mailto:hello@pentafox.in"> hello@pentafox.in</a>
                  </Text>
                  <Text size="md" color="blue">
                    
                  </Text>
                </Box>
              </MantineProvider>
            </div>

            {/* </Container> */}
            <Container size={1200} py={40} px={0}>
              <PopupButton
                url="https://calendly.com/vignesh-sankaran"
                rootElement={document.getElementById("___gatsby")}
                styles={{ border: "none", backgroundColor: "transparent" }}
                text={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 40,
                      justifyContent: "center",
                    }}
                  >
                    <h1 className="letsTalk">
                      Let's Talk.
                      <svg
                        viewBox="0 0 82 84"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ position: "absolute", top: 0, right: "-5%" }}
                        width={"10%"}
                      >
                        <path
                          d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M49.3429 34.6508L52.917 28.1667"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M32.9786 50.3504L28.6387 54.6391"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M52.6361 48.6656L56.9506 51.5758"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
                          stroke="currentColor"
                          stroke-width="1.90596"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </h1>
                    <div style={{ width: "12%", opacity: 0 }} ref={arrowRef}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-up-right"
                        width={"100%"}
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="rgba(220, 41, 8, 1)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M17 7l-10 10"></path>
                        <path d="M8 7l9 0l0 9"></path>
                      </svg>
                    </div>
                  </div>
                }
              />
            </Container>
          </FundedWrapper>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default Funded;
