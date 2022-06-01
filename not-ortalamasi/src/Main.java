import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Matematik notunuzu giriniz: ");
        int mat = scan.nextInt();

        System.out.println("Fizik notunuzu giriniz: ");
        int fiz = scan.nextInt();

        System.out.println("Kimya notunuzu giriniz: ");
        int kim = scan.nextInt();

        System.out.println("Tarih notunuzu giriniz: ");
        int tarih = scan.nextInt();

        System.out.println("Müzik notunuzu giriniz: ");
        int muzik = scan.nextInt();

        int toplam = mat + fiz + kim + tarih + muzik;
        double ortalama = toplam / 5.0;

        System.out.println("Ortalama notunuz: " + ortalama);

        String sonuc = (ortalama > 60) ? "Sınıfı Geçti": "Sınıfta Kaldı";
        System.out.println(sonuc);

    }
}
