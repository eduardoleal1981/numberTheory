# Teoria Elementar dos Conjuntos
## Conjuntos
- Números naturais: 
    - $\mathbb N$
- Números inteiros:
    - $\mathbb Z$
- Números racionais:
    - $\mathbb Q$
- Números reais:
    - $\mathbb R$
- Números complexos:
    - $\mathbb C$
- Descrição de conjuntos por:
    - Listagem de elementos: 
        - $\mathrm X = \\{ 1, 2, 3, 4, 5, 6 \\}$  
        - Python code:  
        ```python
        X = {1, 2, 3, 4, 5, 6}
        ```
    - Listagem de elementos com acréscimo de reticências para omitir sequência óbvia: 
        - $\mathrm X = \\{ 1, 2, 3, ..., 6 \\}$  
        - Python code:  
        ```python
        X = set(range(1,7))
        ```
    - Indicação de regras de pertencimento para seus elementos:
        - $\mathrm X = \\{ x\ :\ x\ é\ um\ inteiro\ positivo\ não\ nulo\ menor\ que\ 7 \\}$
        - $\mathrm X = \\{ x\ |\ x\ é\ um\ inteiro\ positivo\ não\ nulo\ menor\ que\ 7 \\}$  
        - Python code:  
        ```python
        X = {element for element in range(1,7)} # Using set comprehension to create a new set
        X = {element for element in range(1,7) if element < 7} # Using set comprehension to create a new set
        X = {element + 0 for element in range(1,7) if element < 7} # Using set comprehension to create a new set
        ```  
## Definição Ingênua de Conjunto
- Seja $\mathrm X\ =\ \\{x\ \in \mathbb R\ \mathrm |\ P\(x\)\ \\}$ um conjunto e x um objeto, são válidas as afirmações:
1. Se x satisfaz a propriedade P(x), isto é, se P(x) é uma proposição verdadeira, escrevemos $x\ \in X$ e dizemos que x pertence a X. 
2. Se x não satisfaz a propriedade P(x), isto é, se P(x) é uma proposição falsa, escrevemos $x\ \notin X$ e dizemos que x não pertence a X.