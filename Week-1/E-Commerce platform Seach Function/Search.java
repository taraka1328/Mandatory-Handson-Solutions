import java.util.Arrays;
import java.util.Comparator;

public class Search  {
    public static Product linearSearch (Product[] products , String key){
        for(Product p : products){
                if(p.productName.equalsIgnoreCase(key)){
                    return p;
                }
        }
        return null;
    }
    public static Product binarySearch(Product[] products , String key){
        Arrays.sort(products,Comparator.comparing(p -> p.productName.toLowerCase()));
        int low =0 ;
        int high = products.length -1 ;
        while(low<= high){
            int mid = (low + high)/2;
            int compare = products[mid].productName.compareToIgnoreCase(key);
            if (compare == 0) return products[mid];
            else if(compare < 0) low = mid+1;
            else high = mid-1;
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] productList = {
            new Product(101, "aaa", "a"),
            new Product(102, "abc", "a"),
            new Product(103, "bbb", "b"),
            new Product(104, "bcd", "b"),
            new Product(105, "xyz", "x")
        };

        String searchName = "aaa";

        Product linearResult = linearSearch(productList, searchName);
        System.out.println("Linear Search Result: " + (linearResult != null ? linearResult : "Not Found"));

        Product binaryResult = binarySearch(productList, searchName);
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult : "Not Found"));
    
    }
}
