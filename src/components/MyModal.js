function MyModal(props) {
    return <>
        <div class="modal" tabindex="-1" id={props.id}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{props.title}</h5>
                        <button id={props.id + '_btnClose'} type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MyModal;