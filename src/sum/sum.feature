Feature:
    It sums up two numbers

    Scenario Outline: adding x and y
        When adding <x> and <y>
        Then the sum is <sum>
    
    Examples:
    | x | y | sum |
    | 1 | 2 | 3  |
    | -1 | -2 | -3 |
    | 0 | 0 | 0 |