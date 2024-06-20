
# Insertion Sort Step Through

Initialize Sorted with first element of input
**sorted = [8]**

input = [8, 4, 23, 42, 16, 15]

## Inserting 4 into sorted: [8]

Initialize i to 0:
WHILE value > sorted[i]:

- 4 > 8 is false, exit loop

WHILE i < sorted.length:

- temp = sorted[i] = 8
- sorted[i] = 4, so sorted = [4]
- value = 8
- i = 1

Exit loop since i = sorted.length = [8] = 1
Append value to sorted:
**sorted = [4, 8]**

## Inserting 23 into sorted: [4, 8]

Initialize i to 0:
WHILE value > sorted[i]:

- 23 > 4 is true, i = 1
- 23 > 8 is true, i = 2

Exit loop as i = sorted.length
Append value to sorted:
**sorted = [4, 8, 23]**

## Inserting 42 into sorted: [4, 8, 23]

Initialize i to 0:
WHILE value > sorted[i]:

- 42 > 4 is true, i = 1
- 42 > 8 is true, i = 2
- 42 > 23 is true, i = 3

Exit loop as i = sorted.length
Append value to sorted:
**sorted = [4, 8, 23, 42]**

## Inserting 16 into sorted: [4, 8, 23, 42]

Initialize i to 0:
WHILE value > sorted[i]:

- 16 > 4 is true, i = 1
- 16 > 8 is true, i = 2
- 16 < 23 is false, exit loop

WHILE i < sorted.length:

- temp = sorted[i] = 23

**sorted[i] = 16, so sorted = [4, 8, 16, 42]**

- value = 23
- i = 3
- temp = sorted[i] = 42

**sorted[i] = 23, so sorted = [4, 8, 16, 23]**

- value = 42
- i = 4

Exit loop since i = sorted.length
Append value to sorted:

**sorted = [4, 8, 16, 23, 42]**

## Inserting 15 into sorted: [4, 8, 16, 23, 42]

Initialize i to 0:
WHILE value > sorted[i]:

- 15 > 4 is true, i = 1
- 15 > 8 is true, i = 2
- 15 < 16 is false, exit loop

WHILE i < sorted.length:

- temp = sorted[i] = 16

**sorted[i] = 15, so sorted = [4, 8, 15, 23, 42]**

- value = 16
- i = 3
- temp = sorted[i] = 23

**sorted[i] = 16, so sorted = [4, 8, 15, 16, 42]**

- value = 23
- i = 4
- temp = sorted[i] = 42

**sorted[i] = 23, so sorted = [4, 8, 15, 16, 23]**

- value = 42
- i = 5

Exit loop since i = sorted.length
Append value to sorted:

**sorted = [4, 8, 15, 16, 23, 42]**

## Final Sorted Array

sorted = [4, 8, 15, 16, 23, 42]
