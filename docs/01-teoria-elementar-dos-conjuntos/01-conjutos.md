# Teoria Elementar dos Conjuntos
## Conjuntos

- Números naturais: 
$$ N $$  

- Números inteiros:
$$ Z $$  

- Números racionais:
$$ Q $$  

- Números reais:
$$ R $$  

- Números complexos:
$$ C $$  

- Definição de conjuntos por:
    - Listagem de elementos: 
        $$ X = {1, 2, 3, 4, 5, 6} $$  
        - 
        ```python title="Python code ..."
        X = {1, 2, 3, 4, 5, 6}
        ```
    - Listagem de elementos com acréscimo de reticências para omitir sequência óbvia: 
        $$ X = {1, 2, 3}.union(set(4:7)) $$  
        - 
        ```python title="Python code ..."
        X = {1, 2, 3}
        Y = set(range(4,7))
        Z = X.union(Y)
        ```
    - Indicação de regras de pertencimento para seus elementos:
        $$ X = { x : x\ é\ um\ inteiro\ positivo\ não\ nulo\ menor\ que\ 7} $$  
        $$ X = { x | x\ é\ um\ inteiro\ positivo\ não\ nulo\ menor\ que\ 7} $$   
        ```python title="Python code ..."
        Y = {y for y in range(1,7)} # Using set comprehension to create a new set
        Y = {y for y in range(1,7) if y < 7} # Using set comprehension to create a new set
        Y = {y + 0 for y in range(1,7) if y < 7} # Using set comprehension to create a new set
        ```
