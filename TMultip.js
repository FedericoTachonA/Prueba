import java.util.Scanner;
public class Ejercicio13 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner teclado = new Scanner( System.in );
		int num;
		 do{
		 System.out.print("Introduce número (de 0 a 10): ");
		 num=teclado.nextInt();
		 }while ( ! (0<=num && num<=10));
		 System.out.println("\n\nTabla del " + num);

		 for (int i=1;i<=10;i++)
		 {
		 System.out.println(num + " x " + i + " = " + num*i);

		 }
	}

}