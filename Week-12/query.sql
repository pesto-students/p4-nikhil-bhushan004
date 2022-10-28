-- Find the item that has minimum weight
SELECT MIN(weight) AS min_weight
FROM items;

-- Find the different warehouses in “Pune”.
SELECT *
FROM `warehouses` `w`
JOIN `cities` `c` ON `c`.`id` = `w`.`cid`
WHERE `c`.`city` = 'pune'


-- Find the details of items ordered by a customer “Mr. Patil”
SELECT `i`.*
FROM `items` `i`
JOIN `orders` `o` ON `o`.`ono` = `i`.`ono`
JOIN `customer` `c` ON `c`.`cno` = `o`.`cno`
WHERE `c`.`cname` LIKE  '%Patil%'


-- Find a Warehouse which has maximum stores.
SELECT MAX(total_stores), warehouse_id
FROM (
SELECT COUNT(`s`.`wid`) AS Total, `s`.`wid` AS warehouse_id
FROM `stores` `s`
GROUP BY `s`.`wid`
) AS max_stores



-- Find an item which is ordered for a minimum number of times
SELECT min(`i`.`itemno`) AS min_item, `i`.*
FROM `items` `i`
GROUP BY `i`.`itemno`
ORDER BY `min_item` ASC
LIMIT 1



-- Find the detailed orders given by each customer.
SELECT * 
FROM `customer` `c`
JOIN `orders` `o` ON `o`.`cno` = `c`.`cno`
JOIN `items` `i` ON `i`.`ono` = `o`.`ono`