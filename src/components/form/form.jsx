import classNames from "classnames";

import Input from "../input/input";

import formStyles from "news-site-css/dist/form.module.css";
import buttonStyles from "news-site-css/dist/button.module.css";

export default function Form({ onCancel, onSubmit}) {
    function handleSubmit(e) {
        onSubmit(e);
        e.preventDefault();
    }

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <div className={formStyles["form-container"]}>
            <div className={formStyles["form-content"]}>
                <form id="form" onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        placeholder="Enter Username"
                        label="Username"
                        type="text"
                        containerClass={formStyles["form-item"]}
                        onChange={handleChange}
                    />
                    <Input
                        id="password"
                        placeholder="Enter Password"
                        label="Password"
                        type="text"
                        containerClass={formStyles["form-item"]}
                        onChange={handleChange}
                    />
                    <div className={classNames(
                        formStyles["form-actions"],
                        formStyles["form-item"]
                    )}>
                        <Input
                            id="submit"
                            placeholder="Submit"
                            label="Submit"
                            type="submit"
                            containerClass={formStyles["form-actions-item"]}
                            onChange={handleSubmit}
                        />
                        <button 
                            id="form-reject-button" 
                            className={classNames(
                                buttonStyles.button,
                                buttonStyles["secondary-button"],
                                buttonStyles.dark,
                                formStyles["form-actions-item"]
                            )}
                            onClick={onCancel}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
