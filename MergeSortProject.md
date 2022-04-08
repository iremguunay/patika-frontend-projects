# Proje 2
Patika.dev Merge Sort Project
www.patika.dev

# Task:
[16,21,11,8,12,22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.

# Solution:

S1: [16,21,11,8,12,22] -> Merge Sort Aşamaları:

  1. [16,21,11]  [8,12,22]
  2. [16,21] / [11]  [8,12] / [22]
  3. [16] - [21] / [11]  [8] - [12] / [22]
  4. [16,21] / [11]  [8,12] / [22]
  5. [11,16,21]  [8,12,22]
  6. [8,11,12,16,21,22]

S2: Big-O -> O(nlogn)
