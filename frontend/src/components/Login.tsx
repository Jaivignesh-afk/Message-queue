
import { styles }  from "../static/css"
console.log(styles.container);

export default function Login() {
  
  

  return (
    <div className="">
        <div className={ styles.container }>
          <div><h2 className="text-center">Login</h2></div>
          <div className="flex flex-col space-y-4">
            <form>
              <label className="text-center">Email</label>
            <div>
                <input type="email" className="text-xl block w-full p-2 text-gray-900 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      />
            </div>
              <label>Password</label>
            <div>
              <input type="password" className="text-xl block w-full p-2 text-gray-900 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="text-white bg-blue-700 rounded-md font-normal text-xl box-content p-2 mt-6"
                      >
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
}
 