#include <stdio.h>
void main ( ) 
{
	int num , i;
	long int fact;
		printf ("\n\t Enter a number: ");
		scanf ("%d", & num);
		fact=1;
		for ( i = 1 ; i <= num ; i++)
		{
			fact = fact * i ;
		}
		printf ("\n\n\t Factorial of %d is %ld", num , fact);
		fflush (stdin);
}